import { I4MIBundle } from '../src';
import { FhirBundleType } from '../src/definition/version4.0.0/fhir.Bundle';

test('CreateBundle', () => {
    let bundleType: FhirBundleType = FhirBundleType.Transaction;
    let bundle = new I4MIBundle(bundleType);
    
    console.log('CREATED:', bundle);
    
    expect(bundle.type).toBe(bundleType);
});