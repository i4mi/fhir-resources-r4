import { I4MIBundle, I4MIInterfaceToMapResource } from '../src';
import { BundleType, BundleHTTPVerb, ObservationStatus } from '../src/definition/';
import { Observation } from '../src/definition/';
import { CodeableConcept } from '../src/definition/';

test('CreateBundle', () => {
    let bundleType: BundleType = BundleType.TRANSACTION;
    let bundle = new I4MIBundle(bundleType);

    expect(bundle.type).toBe(bundleType);
});

test('AddEntryToBundle', () => {
    let bundleType: BundleType = BundleType.TRANSACTION;
    let bundle = new I4MIBundle(bundleType);

    expect(bundle.type).toBe(bundleType);

    let observationCode: CodeableConcept = {
        coding: [ {code: 'CodeX' }],
        text: 'CodeX'
    }

    let observationOne: Observation = {
        status: ObservationStatus.PRELIMINARY,
        resourceType: 'Observation',
        code: observationCode,
        valueInteger: 1
    }

    let observationTwo: Observation = {
        status: ObservationStatus.PRELIMINARY,
        resourceType: 'Observation',
        code: observationCode,
        valueInteger: 2
    }

    bundle.addEntry(BundleHTTPVerb.POST, observationOne);

    let resource = <Observation>bundle.entry[0].resource

    expect(bundle.entry.length).toBe(1);
    expect(resource.id).toBeDefined();

    bundle.addEntry(BundleHTTPVerb.POST, observationTwo);

    let resourceTwo = <Observation>bundle.entry[0].resource

    expect(bundle.entry.length).toBe(2);
    expect(resourceTwo.id).toBeDefined();

});


test('AddEntryWithIdToBundle', () => {
    let bundleType: BundleType = BundleType.TRANSACTION;
    let bundle = new I4MIBundle(bundleType);

    expect(bundle.type).toBe(bundleType);

    let observationCode: CodeableConcept = {
        coding: [ {code: 'CodeX' }],
        text: 'CodeX'
    }

    let observationOne: Observation = {
        status: ObservationStatus.PRELIMINARY,
        resourceType: 'Observation',
        code: observationCode,
        valueInteger: 1,
        id: "1"
    }

    bundle.addEntry(BundleHTTPVerb.POST, observationOne);

    let resource = <Observation>bundle.entry[0].resource;

    expect(bundle.entry.length).toBe(1);
    expect(resource.id).toBe("1");

});


test('AddEntryAlreadyDefinedIdToBundle', () => {
    let bundleType: BundleType = BundleType.TRANSACTION;
    let bundle = new I4MIBundle(bundleType);

    expect(bundle.type).toBe(bundleType);

    let observationCode: CodeableConcept = {
        coding: [ {code: 'CodeX' }],
        text: 'CodeX'
    }

    let observationOne: Observation = {
        status: ObservationStatus.PRELIMINARY,
        resourceType: 'Observation',
        code: observationCode,
        valueInteger: 1
    }

    let observationTwo: Observation = {
        status: ObservationStatus.PRELIMINARY,
        resourceType: 'Observation',
        code: observationCode,
        valueInteger: 2
    }

    let observationThree: Observation = {
        status: ObservationStatus.PRELIMINARY,
        resourceType: 'Observation',
        code: observationCode,
        valueInteger: 3
    }

    bundle.addEntry(BundleHTTPVerb.POST, observationOne);

    let resource = <Observation>bundle.entry[0].resource;

    expect(bundle.entry.length).toBe(1);
    expect(resource.id).toBeDefined();

    bundle.addEntry(BundleHTTPVerb.POST, observationTwo);

    let resourceTwo = <Observation>bundle.entry[1].resource;

    expect(bundle.entry.length).toBe(2);
    expect(resource.id).toBeDefined();

    observationThree.id = resourceTwo.id;
    expect(() => {
        bundle.addEntry(BundleHTTPVerb.POST, observationThree)
    }).toThrow();
    expect(bundle.entry.length).toBe(2);
});

test('RemoveEntryFromBundle', () => {
    let bundleType: BundleType = BundleType.TRANSACTION;
    let bundle = new I4MIBundle(bundleType);

    expect(bundle.type).toBe(bundleType);

    let observationCode: CodeableConcept = {
        coding: [ {code: 'CodeX' }],
        text: 'CodeX'
    }

    let observationOne: Observation = {
        status: ObservationStatus.PRELIMINARY,
        resourceType: 'Observation',
        code: observationCode,
        valueInteger: 1
    }

    let observationTwo: Observation = {
        status: ObservationStatus.PRELIMINARY,
        resourceType: 'Observation',
        code: observationCode,
        valueInteger: 2
    }

    let observationThree: Observation = {
        status: ObservationStatus.PRELIMINARY,
        resourceType: 'Observation',
        code: observationCode,
        valueInteger: 3
    }

    let one = bundle.addEntry(BundleHTTPVerb.POST, observationOne);
    let two = bundle.addEntry(BundleHTTPVerb.POST, observationTwo);
    let three = bundle.addEntry(BundleHTTPVerb.POST, observationThree)

    let resourceToRemove = <I4MIInterfaceToMapResource>one.resource;

    expect(bundle.entry.length).toBe(3);
    expect(resourceToRemove['id']).toBeDefined();

    let removedEntry = bundle.removeEntry(resourceToRemove['id']);

    expect(removedEntry).toBeDefined()
    expect(bundle.entry.length).toBe(2);

    removedEntry = bundle.removeEntry('invalidId');
    expect(removedEntry).toBeUndefined()
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