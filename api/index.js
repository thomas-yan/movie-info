import fetch from "isomorphic-unfetch";

export async function getData(id) {
  const key = "d5ec0a5c314e36218436d747448d15fc";

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US&append_to_response=credits`
  );
  if (res.status !== 200) {
    console.log("Error: " + response.status);
    return;
  } else {
    const json = res.json();
    return json;
  }
}
