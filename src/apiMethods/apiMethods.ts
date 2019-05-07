export enum HttpMethod{
    POST = 'POST',
    PUT = 'PUT',
    GET = 'GET',
    DELETE = 'DELETE'
}

export interface ApiCallArgs {
    url: string;
    method: HttpMethod;
    payload?: any;
    headers?: any;
    jsonBody?: boolean;
    jsonEncoded?: boolean;
}

export interface ApiCallResponse {
    message: string,
    body: any,
    status: number
};


export interface ApiConfig {
    base_url: string,
    access_token?: string,
    authorization_type?: string
}

export class ApiMethods {
    
    private _config: ApiConfig;

    constructor(config?: ApiConfig) {
        this._config = config?config:{base_url:""};
    }

    /**
     * create a new record
     * @param resource the resource to create
     * @param config Optional - the configurations for the request
     */
    create(resource: any, config?: ApiConfig) : Promise<ApiCallResponse> {
        let args:ApiCallArgs = this.init(HttpMethod.POST, config);

        if (resource.resourceType !== 'Bundle') {
            args.url += ('/' + resource.resourceType);   
        }

        if (!args.headers){
            args.headers = { 
                "Prefer": "return=representation",
                "Content-Type": "application/json+fhir;charset=utf-8"
            };
        } else {
            if (!args.headers.Prefer) args.headers.Prefer = "return=representation";
            if (!args.headers["Content-Type"]) args.headers["Content-Type"] = "application/json+fhir;charset=utf-8";
        }

        args.payload = resource;

        return apiCall(args);
    }

    /**
     * update a record
     * @param resource resource to update
     * @param config Optional - the configurations for the request
     */
    update(resource: any, config?: ApiConfig) : Promise<ApiCallResponse> {
        let args:ApiCallArgs = this.init(HttpMethod.POST, config);
        args.url += ('/' + resource.resourceType + '/' + resource.id);

        if (!args.headers){
            args.headers = { 
                "Prefer": "return=representation",
                "Content-Type": "application/json+fhir;charset=utf-8"
            };
        } else {
            if (!args.headers.Prefer) args.headers.Prefer = "return=representation";
            if (!args.headers["Content-Type"]) args.headers["Content-Type"] = "application/json+fhir;charset=utf-8";
        }

        args.payload = resource;

        return apiCall(args);
    }

    /**
     * get a resource
     * @param resourceType the resource type
     * @param id the id of the resource
     * @param vid optional: the version of this resource
     * @param config optional: the configurations for the request
     */
    read(resourceType: string, id: string, vid?: string, config?: ApiConfig) : Promise<ApiCallResponse> {
        let args:ApiCallArgs = this.init(HttpMethod.GET, config);
        args.url += ('/' + resourceType + '/' + id + (!vid?"/_history/" + vid : ""));

        if (!args.headers){
            args.headers = { 
                "Content-Type": "application/json+fhir;charset=utf-8"
            };
        } else {
            if (!args.headers["Content-Type"]) args.headers["Content-Type"] = "application/json+fhir;charset=utf-8";
        }

        return apiCall(args);
    }

    /**
     * search resources
     * @param params the search parameters
     * @param resourceType the resource type
     * @param config optional: the configurations for the request
     */
    search(params: string | any, resourceType?: string, config?: ApiConfig) : Promise<ApiCallResponse> {
        let args:ApiCallArgs = this.init(HttpMethod.GET, config);
        
        //https://www.hl7.org/fhir/http.html#vsearch
        if (resourceType) {
            args.url += ('/' + resourceType);   
        }

        if (!args.headers){
            args.headers = { 
                "Content-Type": "application/json+fhir;charset=utf-8"
            };
        } else {
            if (!args.headers["Content-Type"]) args.headers["Content-Type"] = "application/json+fhir;charset=utf-8";
        }

        if (params) {
            args.url += "?";
            
            if (typeof params === "string") {
                args.url += params;
            } else {
                let first_time_in_loop_params = true;
                Object.keys(params).forEach((key) => {
                    if (first_time_in_loop_params) first_time_in_loop_params = false;
                    else args.url += "&";

                    args.url += (key + "=" + encodeURI(params[key]))
                });
            }
        }

        return apiCall(args);
    }

    // TODO:
    delete() : Promise<ApiCallResponse> {
        throw "NOT IMPLEMENTED";
    }

    // TODO: implement history()?

    // help functions

    /**
     * this function initialize the CRUD functions
     * @param method the http method
     * @param config optional: the configurations for the request
     */
    private init(method: HttpMethod, config?: ApiConfig) : ApiCallArgs{
        // if the configurations are null then use the default configurations defined in the constructor
        if(!config){
            config = this._config;
        }

        let args:ApiCallArgs = {
            method: method,
            url: config.base_url
        };

        // Add token if given
        if (config.authorization_type && config.access_token) {
            if(args.headers){
                args.headers.Authorization = config.authorization_type + ' ' + config.access_token;
            } else {
                args.headers = {
                    Authorization: config.authorization_type + ' ' + config.access_token
                }
            }
        }

        // Add default values for Headers


        return args;
    }
}

export function apiCall(args: ApiCallArgs): Promise<ApiCallResponse> {

    let url = args.url;
    let method = args.method;
    let payload = args.payload;
    let headers = args.headers;
    let jsonBody = args.jsonBody || false;
    let jsonEncoded = args.jsonEncoded; // flag indicating json-encoding

    const DEFAULT_TIMEOUT = 20000;

    return new Promise<ApiCallResponse>((resolve, reject) => {
        let xhr = new XMLHttpRequest();

        xhr.open(method, url, true);

        xhr.timeout = DEFAULT_TIMEOUT;

        if (headers) {
            Object.keys(headers).forEach((key) => {
                xhr.setRequestHeader(key, headers[key]);
            });
        }

        xhr.onload = function() {
            let status = xhr.status
            if (status >= 200 && status < 300) {  // successful response
                let body: any;
                if (jsonBody) {
                    body = JSON.parse(xhr.responseText);
                } else {
                    body = xhr.responseText;
                }
                resolve({
                    message: 'Request successful',
                    body: body,
                    status: status
                });
            } else {  // loaded but non-successful response
                reject({
                    message: xhr.statusText,
                    body: xhr.responseText,
                    status: status
                });
            }
        };

        xhr.ontimeout = function() {
            reject({
                message: 'Request timed out. No answer from server received',
                body: '',
                status: -1
            });
        };

        xhr.onerror = function() {
            reject({
                message: 'Error. transaction failed',
                body: '',
                status: 0
            });
        };

        // NOTE: Note that the payload should probably be stringified
        // before being passed into this function in order to allow
        // non-json encodings of the payload (such as url-encoded or plain text).
        // Supplement wya3: Check for JSON encoding. Additionally check if undefined in
        // order to ensure backward compatibility.

        if (payload !== undefined) {
            if (jsonEncoded || jsonEncoded == undefined) {
                xhr.send(JSON.stringify(payload));
            } else {
                xhr.send(payload);
            }
        }
        else {
            xhr.send();
        }
    });
};