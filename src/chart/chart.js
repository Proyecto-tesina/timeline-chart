import { CameraDetectionRow, PlayerActionRow, DrtMonitorRow } from "chart/rows.js";


const COLUMNS = [
	{ type: 'string',	id: 'Description' }, 
	{ type: 'string',	id: 'Name' }, 
	{ type: 'date', id: 'Start' }, 
	{ type: 'date', id: 'End'} , 
]

export default class ExperimentChart {

	constructor(experiment) {
		this.experiment = experiment;

		this.rows = [
			new DrtMonitorRow(experiment),
			new CameraDetectionRow(experiment),
			new PlayerActionRow(experiment)
		];
	}

	columns() {
		return COLUMNS;
	}

	rowsElements() {
		const rows = this.rows.flatMap(
			(row) => row.elements()
		);

		return rows;
	}

	data() {
		const data = []

		data.push(this.columns());
		return data.concat(this.rowsElements());
	}

}