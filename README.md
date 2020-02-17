# I4MI on FHIR® - fhir-resources-r4.ts
FHIR® resources, inheritance and type definitions.  
Generated from the FHIR® definition json by the Institute of Medical Informatics (I4MI). 
<img src="https://siot.net/upload/resources/bfh.png" width="250px" />


# Usage guide

Install with
```
npm i @i4mi/fhir_r4
```

## Supported fhir version
- R4

## Use with NodeJS
If you want to use this library in a node project which does not run on any browser, you need to install further dependencies.

1. Install XMLHttpRequest:
```
npm i xmlhttprequest
```

2. Set global var
```
global['XMLHttpRequest'] = require("xmlhttprequest").XMLHttpRequest;
```
or
```
const XMLHttpRequestLib = require("xmlhttprequest").XMLHttpRequest;
global['XMLHttpRequest'] = XMLHttpRequestLib;
```

3. You're up to go

## Using resources
How do I select the resource from a specific Version?
Just import resources from the path: 
```
import { Patient, Bundle, Practitioner, Observation, Consent, Group } from '@i4mi/fhir_r4';
```

Then you can use them as types or implement them.

Use as Type:
```
let patient: Patient = {
    resourceType: 'Patient'
    ...
}
```

Implement
```
export class MyPatient implements Patient {
    resourceType = 'Patient';

    ...
}
```

_NOTE:_ You always have to set the `resourceType`!

## Create api calls
How do I create api calls?  
Import statement for using all implemented api methods  
```
import { ApiMethods, apiCall, ApiCallResponse } from '@i4mi/fhir_r4';
```

Then create a method, which returns the initialized `ApiMethods` class. We recomment doing this in a service. You need a valid access token, the token type and the url to the fhir server. For example:
- ACCESS_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImp0aSI6IjRlMjI4YTllLWZmMTMtNDgzNy1iOWFkLTI3NzcxYjM1YWIzNyIsImlhdCI6MTU2NTM1ODc0OCwiZXhwIjoxNTY1MzYyMzQ5fQ.CAfKTeRuGWQxzFuJM7hrB2z4sHuYplP1uXm_B_zkfjM'
- TOKEN_TYPE = 'Bearer'
- FHIR_SERVER_URL = https://your-url.coop

Then create the function. It should look something like this:
```typescript
/**
 * Inits the api method class
 */
private getAPI(): ApiMethods {
  return new ApiMethods({
    access_token: ACCESS_TOKEN,
    authorization_type: TOKEN_TYPE,
    base_url: FHIR_SERVER_URL + '/fhir'});
}
```
__IMPORTANT:__ When the token has changed, you have to re-init the `ApiMethods` class.

In the now created service, implement a function which assigns the `ApiMethods` instance to a member.
```typescript
/**
 * Execute init of API mehtods
 */
initApiMethods() {
  this.apiMethods = this.getAPI();
}
```

The now assigned instance `this.apiMethods` can be used to execute `create`, `update`, `read` and `search`. These methods are implemented according the smart on fhir implementation guidelines.

__IMPORTANT:__ Check the allowed content type (header) of your target server. If it is different than the default "application/fhir+json;fhirVersion=4.0", call `differentiateContentType([YOUR_TYPE])` BEFORE sending any request. For example:  
```typescript
this.apiMethods.differentiateContentType("application/fhir+json;charset=utf-8");
```

### Other examples (search, create, etc.)
Search:
```
myStaticPatientSearch() {
    this.apiMethods.search({ _id: 1 }, 'Patient')
        .then((response) => {
            console.log(response);
        });
}
```
Create:
```
myStaticPatientCreate() {
    const myPatient: Patient = {
        resourceType: 'Patient',
        name: {
            given: [
                'Hans'
            ],
            family: 'Muster'
        }
    }

    this.apiMethods.create(myPatient, 'Patient').then(
        (response) => {
            console.log(response);
        });
}
```



# Contribution & dev guide

## build

to generate a new build in './dist/' 
```
npm run build
```

## deploy

update version in package.json
then
```
npm publish --access public
```

----
FHIR® is the registered trademark of HL7 and is used with the permission of HL7. Use of the FHIR trademark does not constitute endorsement of this product by HL7.