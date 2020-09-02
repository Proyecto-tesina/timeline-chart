const API_URL = process.env.REACT_APP_API_URL

export const lastExperimentUrl = `${API_URL}/experiments/?limit=1`;

export async function get(url) {
	let response = await fetch(url);
    let json = await response.json();

    return json;
}
