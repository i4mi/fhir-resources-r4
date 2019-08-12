export declare enum HttpMethod {
    POST = "POST",
    PUT = "PUT",
    GET = "GET",
    DELETE = "DELETE"
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
    message: string;
    body: any;
    status: number;
}
export interface ApiConfig {
    base_url: string;
    access_token?: string;
    authorization_type?: string;
}
export declare class ApiMethods {
    private _config;
    constructor(config?: ApiConfig);
    /**
     * create a new record
     * @param resource the resource to create
     * @param config Optional - the configurations for the request
     */
    create(resource: any, config?: ApiConfig): Promise<ApiCallResponse>;
    /**
     * update a record
     * @param resource resource to update
     * @param config Optional - the configurations for the request
     */
    update(resource: any, config?: ApiConfig): Promise<ApiCallResponse>;
    /**
     * get a resource
     * @param resourceType the resource type
     * @param id the id of the resource
     * @param vid optional: the version of this resource
     * @param config optional: the configurations for the request
     */
    read(resourceType: string, id: string, vid?: string, config?: ApiConfig): Promise<ApiCallResponse>;
    /**
     * search resources
     * @param params the search parameters
     * @param resourceType the resource type
     * @param config optional: the configurations for the request
     */
    search(params: string | any, resourceType?: string, config?: ApiConfig): Promise<ApiCallResponse>;
    delete(): Promise<ApiCallResponse>;
    /**
     * this function initialize the CRUD functions
     * @param method the http method
     * @param config optional: the configurations for the request
     */
    private init;
}
export declare function apiCall(args: ApiCallArgs): Promise<ApiCallResponse>;
