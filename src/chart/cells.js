export class Cell {

    constructor({name, description, startEvent, endEvent}) {
        this.name = name;
        this.description = description;
        this.startEvent = startEvent;
        this.endEvent = endEvent;
    }

    missingEndEvent() {
        return this.endEvent === undefined
    }

    timedOutStartEvent() {
        const nowTimestamp = new Date(Date.now());
        const timeout = 300000;

        return (nowTimestamp - this.startEvent.timestamp) > timeout
    }

    endTimestamp() {
        const nowTimestamp = new Date(Date.now());

        if (!this.missingEndEvent())            
            return this.endEvent.timestamp;
        
        if (this.timedOutStartEvent()){
            return this.startEvent.timestamp;
        }

        return nowTimestamp
    }

    missingStartEvent() {
        return this.startEvent === undefined
    }

    startTimestamp() { 
        if (!this.missingStartEvent())
            return this.startEvent.timestamp;

        return this.endEvent.timestamp
    }
}