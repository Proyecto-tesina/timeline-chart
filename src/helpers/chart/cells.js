export class Cell {
    static colors = {
            "Light lost" : "red",
            "default" : "",
    };

    constructor({name, description, startEvent, endEvent, chart}) {

        this.name = name;
        this.description = description;
        this.startEvent = startEvent;
        this.endEvent = endEvent;
        this.chart = chart;
    }

    color() {
        const { description } = this;
        const { colors } = Cell;

        const hasColor = description in colors;

        return hasColor ? colors[description] : colors.default;
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

        if (this.chart.isFinished())
            return this.chart.endTime()
        
        if (this.timedOutStartEvent())
            return this.startEvent.timestamp;

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