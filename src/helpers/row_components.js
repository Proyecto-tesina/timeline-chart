import { Event } from 'helpers/events.js';

class RowComponent {

    constructor(data) {
        this.data = data;

        this.data.forEach(
            data => data.timestamp = new Date(data.timestamp)
        );
    }

    rows() {
        const events = this.events();

        return events.map(event => [
            event.name,
            event.description,
            event.startTimestamp(),
            event.endTimestamp()
        ])
    }
}

export class CameraDetectionComponent extends RowComponent {

    detections() {
        return this.data.filter((data) => data.status === 'I see you');
    }

    nonDetections() {
        return this.data.filter((data) => data.status === 'I don\'t see you');
    }

    nextDetection(nonDetection) {
        const detections = this.detections();

        const nextDetections = detections.filter(
            (detection) => detection.timestamp >= nonDetection.timestamp
        )

        return nextDetections.length ? nextDetections[0] : nonDetection
    }

    distractionEvents() {
        const name = 'Distraction time';
        const description = 'Camera NO detection';

        const nonDetections = this.nonDetections();

        const events = nonDetections.map(
            (nonDetectionEvent, index) => new Event({
                name: name,
                description: `${description} ${index}`,
                startEvent: nonDetectionEvent,
                endEvent: this.nextDetection(nonDetectionEvent)
            })
        );

        return events
    }

    events() {
        const distractionEvents = this.distractionEvents();

        return distractionEvents;
    }
}

export class DrtMonitorComponent extends RowComponent {

    drtsOn() {
        return this.data.filter((data) => 
            data.status === "start" || data.status === "end"
        );
    }

    drtEvents() {
        const name = 'Light';
        const description = 'DRT on';
        const events = [];

        const drtsOn = this.drtsOn();

        for (var i = 0; i < drtsOn.length; i += 2) {
            const event = new Event({
                name: description,
                description: `${name} ${i / 2}`,
                startEvent: drtsOn[i],
                endEvent: drtsOn[i + 1]
            });

            events.push(event);
        }

        return events;
    }

    mistakes() {
        return this.data.filter((data) => data.status === "mistake");
    }

    mistakeEvents() {
        const mistakes = this.mistakes();

        const events = mistakes.map(
            (mistake, i) => new Event({
                name: 'Mistakes',
                description: `Mistake ${i}`,
                startEvent: mistake,
                endEvent: mistake
            })
        );

        return events
    }

    events() {
        const drtEvents = this.drtEvents();
        const mistakeEvents = this.mistakeEvents();

        return drtEvents.concat(mistakeEvents);
    }
}

export class PlayerActionComponent extends RowComponent {

    playerActionEvents() {
        const events = this.data.map(
            (event) => new Event({
                name: event.status,
                description: event.status,
                startEvent: event,
                endEvent: event
            })
        );

        return events
    }

    events() {
        return this.playerActionEvents()
    }
}