const API_URL = process.env.REACT_APP_API_URL

export async function getExperiments() {
	let url = `${API_URL}/experiments/`;

    let response = await fetch(url);
    let experiments = await response.json();

    return experiments
}

export async function lastExperiment() {
    let experiments = await getExperiments();

    return experiments.sort(
        (a,b) => new Date(b.created_at) - new Date(a.created_at)
    )[0]
}

