import { I4MIBundle, I4MIInterfaceToMapResource } from '../src';
import { BundleType, Method } from '../src/definition/version4.0.0/fhir.Bundle';
import { Observation } from '../src/definition/version4.0.0/fhir.Observation';
import { CodeableConcept } from '../src/definition/version4.0.0/fhir._'  

test('CreateBundle', () => {
    let bundleType: BundleType = BundleType.Transaction;
    let bundle = new I4MIBundle(bundleType);
        
    expect(bundle.type).toBe(bundleType);
});

test('AddEntryToBundle', () => {
    let bundleType: BundleType = BundleType.Transaction;
    let bundle = new I4MIBundle(bundleType);
    
    expect(bundle.type).toBe(bundleType);
    
    let observationCode: CodeableConcept = {
        coding: [ {code: 'CodeX' }],
        text: 'CodeX'
    }

    let observationOne: Observation = {
        resourceType: 'Observation',
        code: observationCode,
        valueInteger: 1
    }

    let observationTwo: Observation = {
        resourceType: 'Observation',
        code: observationCode,
        valueInteger: 2
    }

    bundle.addEntry(Method.Post, 'Observation', observationOne);

    let resource = <Observation>bundle.entry[0].resource

    expect(bundle.entry.length).toBe(1);
    expect(resource.id).toBeDefined();

    bundle.addEntry(Method.Post, 'Observation', observationTwo);

    let resourceTwo = <Observation>bundle.entry[0].resource

    expect(bundle.entry.length).toBe(2);
    expect(resourceTwo.id).toBeDefined();

});


test('AddEntryWithIdToBundle', () => {
    let bundleType: BundleType = BundleType.Transaction;
    let bundle = new I4MIBundle(bundleType);
    
    expect(bundle.type).toBe(bundleType);
    
    let observationCode: CodeableConcept = {
        coding: [ {code: 'CodeX' }],
        text: 'CodeX'
    }

    let observationOne: Observation = {
        resourceType: 'Observation',
        code: observationCode,
        valueInteger: 1,
        id: "1"
    }

    bundle.addEntry(Method.Post, 'Observation', observationOne);

    let resource = <Observation>bundle.entry[0].resource;

    expect(bundle.entry.length).toBe(1);
    expect(resource.id).toBe("1");

});


test('AddEntryAlreadyDefinedIdToBundle', () => {
    let bundleType: BundleType = BundleType.Transaction;
    let bundle = new I4MIBundle(bundleType);
    
    expect(bundle.type).toBe(bundleType);
    
    let observationCode: CodeableConcept = {
        coding: [ {code: 'CodeX' }],
        text: 'CodeX'
    }

    let observationOne: Observation = {
        resourceType: 'Observation',
        code: observationCode,
        valueInteger: 1
    }

    let observationTwo: Observation = {
        resourceType: 'Observation',
        code: observationCode,
        valueInteger: 2
    }

    let observationThree: Observation = {
        resourceType: 'Observation',
        code: observationCode,
        valueInteger: 3
    }

    bundle.addEntry(Method.Post, 'Observation', observationOne);

    let resource = <Observation>bundle.entry[0].resource;

    expect(bundle.entry.length).toBe(1);
    expect(resource.id).toBeDefined();

    bundle.addEntry(Method.Post, 'Observation', observationTwo);

    let resourceTwo = <Observation>bundle.entry[1].resource;

    expect(bundle.entry.length).toBe(2);
    expect(resource.id).toBeDefined();

    observationThree.id = resourceTwo.id;
    expect(() => {
        bundle.addEntry(Method.Post, 'Observation', observationThree)
    }).toThrow();
    expect(bundle.entry.length).toBe(2);
});

test('RemoveEntryFromBundle', () => {
    let bundleType: BundleType = BundleType.Transaction;
    let bundle = new I4MIBundle(bundleType);
    
    expect(bundle.type).toBe(bundleType);
    
    let observationCode: CodeableConcept = {
        coding: [ {code: 'CodeX' }],
        text: 'CodeX'
    }

    let observationOne: Observation = {
        resourceType: 'Observation',
        code: observationCode,
        valueInteger: 1
    }

    let observationTwo: Observation = {
        resourceType: 'Observation',
        code: observationCode,
        valueInteger: 2
    }

    let observationThree: Observation = {
        resourceType: 'Observation',
        code: observationCode,
        valueInteger: 3
    }

    let one = bundle.addEntry(Method.Post, 'Observation', observationOne);
    let two = bundle.addEntry(Method.Post, 'Observation', observationTwo);
    let three = bundle.addEntry(Method.Post, 'Observation', observationThree)

    let resourceToRemove = <I4MIInterfaceToMapResource>one.resource;

    expect(bundle.entry.length).toBe(3);
    expect(resourceToRemove['id']).toBeDefined();

    let removedEntry = bundle.removeEntry(resourceToRemove['id']);

    expect(removedEntry).toBeDefined()
    expect(bundle.entry.length).toBe(2);

    if (typeof removedEntry !== 'undefined') {
        let removedResource = <I4MIInterfaceToMapResource>removedEntry.resource;
        expect(removedResource['id']).toBe(resourceToRemove['id']);
    }

    bundle.entry.forEach((entry) => {
        let resource = <I4MIInterfaceToMapResource>entry.resource;
        expect(resource['id']).not.toBe(resourceToRemove['id']);
    });
});