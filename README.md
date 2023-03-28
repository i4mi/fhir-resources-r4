# I4MI on FHIR® - fhir-resources-r4.ts
FHIR® resources, inheritance and type definitions.  
Generated from the FHIR® definition json by the Institute of Medical Informatics (I4MI). 
<img src="https://siot.net/upload/resources/bfh.png" width="250px" />

This is the library based on FHIR® Release 4. You may also be interested in the corresponding library for FHIR® R5: See [@i4mi/fhir_r5](https://www.npmjs.com/package/@i4mi/fhir_r5)

# 1 Breaking changes in version 2.0.0
If you're upgrading from version 1.x.x, you may encounter some breaking changes. These are relatively easy to fix though:
## 1.1 I4MIBundle.addEntry()
The `addEntry()` method of the I4MIBundle smart resource doesn't need the resourceType as an argument anymore (since it is implicit with the actual resource as an argument). This changes the way you call the method. You just have to remove the second argument from every call of addEntry():
**Version 1.x.x** (Example):
```typescript
myBundle.addEntry(BundleHTTPVerb.POST, 'Observation', myObservationResource);
```
becomes 
**Version 2.0.0** (Example):
```typescript
myBundle.addEntry(BundleHTTPVerb.POST, myObservationResource);
```
Note, that also the resource you want to add to the I4MIBundle now needs to be actually of type `Resource` (or any type inheriting from Resource), and can not be `any` anymore.

## 1.2 Resources have fixed resourceType now
In older versions, the resourceType property of every Resource was from type `string` and was not mandatory. This meant that you could have e.g. an Observation resource with no resourceType property at all or with `resourceType = 'Patient'`. This is no longer possible with Version 2.0.0, the resourceType of an Observation resource has to be `Observation`.

# 2 Usage guide

Install with
```
npm i @i4mi/fhir_r4
```

## 2.1 Select fhir version
This library supports the following fhir versions:
- R4 (v4.0.1)

## 2.2 Using resources
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

## 2.3 Create api calls
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

### 2.3.1 Other examples (search, create, etc.)
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

# 3 Smart resources and utils
This library also provides some smart resources and utils to make your life with FHIR® easier.
## 3.1 I4MIBundle
This smart resource represents a Bundle, and lets you add and remove entries.
First, the Bundle has to be initialized by calling `const myBundle = new I4MIBundle(type)`, where type is the BundleType needed.

After initializing the Bundle, you can add an entry by calling `myBundle.addEntry(verb, entry)`, where verb is the BundleHTTPVerb for the entry, and entry the resource you want to add to the Bundle. Contrary to earlier versions of the library, it is not necessary anymore to explicitly specify the resourceType.

For removing an entry from the resource, you can call `myBundle.removeEntry(id)`, where id is the id of the resource in the entry.

## 3.2 Internationalization (I18N)
FHIR® supports I18N with extensions. Any text / string element can have an extensible sibling with an leading underscore, that contains the internationalization strings (e.g. if a resource has a `resource.title` element, the corresponding extensible element would be `resource._title`).

With `readI18N()`, `getAllI18N()` and `writeI18N()`, this library provides functions that help with interacting with this translation extensions.

`readI18N(resource._title, 'en'): string` allows you to read the translation string for a given element and language (in this case, the resource title in english). If the element does not have a well formed I18N extension or the respective language is not available, `undefined` is returned (and you have to fall back on the normal `resource.title` element or another a language).

`getAllI18N(resource._title): {[l: string]: string}` allows you to get all available translation strings for a given element. If the element does not have a well formed I18N extension or no language is available, an empty object `{}`is returned (and you have to fall back on the normal `resource.title` element).

`writeI18N(translations): ExtensionElement` allows you to comfortably write wellformed I18N extensions to a resource element. The 'translations' argument is a key/value pair of the languages and I18N string you want to write, as in the following example:

``` typescript
const translations = {
    en: 'This is the title.',
    fr: 'Voici le titre.',
    de: 'Dies ist der Titel.'
};
resource._title = writeI18N(translations);
```

## 3.3 Other util functions
The library provides some more util functions, that help with working with different simple tasks that you will encounter when using FHIR®.

`hasCode(codeableConcept, coding): boolean` is a helper function that searches for a given coding in a CodeableConcept and returns `true` if at least one of the codings in the CodeableConcept matches the code and the system (if available) of the given coding.

Example code: 
```typescript
const isPollenObservation = hasCoding(
    myObservation.code,     // codeable concept of e.g. an Observation
    { 
        system: 'http://snomed.info/sct', 
        code: '256277009'   // SNOMED for grass pollen
    }
);
if (isPollenObservation) {
    console.log('Resource "myObservation" is about grass pollen.');
}
```

`getCode(codeableConcept, system): code | undefined` extracts a code for a given system (e.g. 'http://snomed.info/sct' for SNOMED CT) from a CodeableConcept. If no code is available for the given system or if the CodeableConcept itself is `undefined`, getCode() returns `undefined`.

`isUUID(id): boolean` checks if a given Value is a valid (Universally Unique Identifier UUID)[https://en.wikipedia.org/wiki/Universally_unique_identifier] (also known als Globally Unique Identifier GUID). It returns true if the given id is an UUID / GUID, and false in every other case.

`getFullName(name): string` extracts the full name from a HumanName, with all given names separated by a whitespace and in the end followed by the family name. Example: Homer Jay Simpson.

`selectName(names, priorisation?): HumanName` selects the best suited HumanName from an array of multiple HumanName. If no priorisation is given, the default priorisation is USUAL > OFFICIAL > TEMP (if period is given and does match) > NICKNAME > ANONYMOUS > TEMP (if period does not match) > MAIDEN > OLD. If none of the provided HumanNames have an use poperty, the first name of the array is returned.

`isInPeriod(period, time?): boolean` checks if a given time point (`time`) is in a given `period`. If no `time` is provided, the current time is taken.

`getIdentifierString(patient, system)` extracts an identifier string from a Patient resource for a given identifier system. It returns a string in the form of `urn:oid:1.1.1.99.1|1e3796be...`, where `urn:oid:1.1.1.99.1` is the system and `1e3796be...` the identifier.

# 4 Contribution & dev guide

## 4.1 build

to generate a new build in './dist/' 
```
npm run build
```

## 4.2 deploy

update version in package.json
then
```
npm publish --access public
```

----
FHIR® is the registered trademark of HL7 and is used with the permission of HL7. Use of the FHIR® trademark does not constitute endorsement of this product by HL7.