import { CameraDetectionComponent, PlayerActionComponent, DrtMonitorComponent } from "helpers/row_components.js";

const COLUMNS = [
	{ type: 'string',	id: 'Description' }, 
	{ type: 'string',	id: 'Name' }, 
	{ type: 'date', id: 'Start' }, 
	{ type: 'date', id: 'End'} , 
]

const DRT_EVENT = "DRT";
const PLAYER_EVENT = "PLAYER";
const CAMERA_EVENT = "CAMERA";


export default class ExperimentChart {

	constructor(experiment) {
		this.experiment = experiment;

		this.rowComponents = [
			new DrtMonitorComponent(this.getEvent(DRT_EVENT)),
			new CameraDetectionComponent(this.getEvent(CAMERA_EVENT)),
			new PlayerActionComponent(this.getEvent(PLAYER_EVENT))
		];
	}

	getEvent(EventName) {
		let events = this.experiment.events;

		return events.filter((event) => event.name === EventName);
	}

	columns() {
		return COLUMNS;
	}

	rows() {
		const rows = this.rowComponents.flatMap(
			(component) => component.rows()
		);

		return rows;
	}

	data() {
		let data = []

		data.push(this.columns());
		return data.concat(this.rows());
	}

}