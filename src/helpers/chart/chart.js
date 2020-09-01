import { CameraDetectionRow, 
	PlayerActionRow, 
	DrtMonitorRow 
} from "./rows.js";


const COLUMNS = [
	{ type: 'string',	id: 'Description' }, 
	{ type: 'string',	id: 'Name' }, 
	{ type: 'date', id: 'Start' }, 
	{ type: 'date', id: 'End'} , 
]

export default class ExperimentChart {

	constructor(experiment) {
		this.experiment = experiment;

        this.experiment.events.forEach(
            experiment => experiment.timestamp = new Date(experiment.timestamp)
        );

		this.rows = [
			new DrtMonitorRow(this),
			new CameraDetectionRow(this),
			new PlayerActionRow(this)
		];
	}

	endTime() {
		const endTimeExperiment = this.experiment.ended_at;

		return new Date(endTimeExperiment)
	}

	isFinished() {
		const endTimeExperiment = this.experiment.ended_at;

		return endTimeExperiment !== null
	}

	columns() {
		return COLUMNS;
	}

	rowsElements() {
		const rows = this.rows.flatMap(
			(row) => row.elements()
		);

		console.log(rows)

		return rows;
	}

	data() {
		const data = []

		data.push(this.columns());
		return data.concat(this.rowsElements());
	}

}