export class Cell {
  static colors = {
    "Light lost": "red",
    default: "",
  };

  constructor({ name, description, startEvent, endEvent, chart }) {
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

  endTimestamp() {
    // Events only have a timestamp, so we need to calculate the "endTime" of the event
    // based on other events
    const nowTimestamp = new Date();
    if (!this.missingEndEvent()) return this.endEvent.timestamp;

    if (this.chart.isFinished()) return this.chart.endTime();

    if (this.timedOutStartEvent()) return this.startEvent.timestamp;

    return nowTimestamp;
  }

  missingEndEvent() {
    return this.endEvent === undefined;
  }

  timedOutStartEvent() {
    const nowTimestamp = new Date();
    const timeout = 300000;

    return nowTimestamp - this.startEvent.timestamp > timeout;
  }

  missingStartEvent() {
    return this.startEvent === undefined;
  }

  startTimestamp() {
    if (!this.missingStartEvent()) return this.startEvent.timestamp;

    return this.endEvent.timestamp;
  }
}
