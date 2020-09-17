export function log(filename, methodName) {
  console.log(filename + "::Redux " + methodName);
}

export function getErrorMessage(response) {
  return {
    originalError: response.originalError,
    errors: response.data ? response.data.errors : null,
  };
}

export function getDisplayStatus({ error, fetching }) {
  if (!!error) {
    let errorMsg = `There was an error but we don't have the info... - ${error}`;
    if (error.errors) {
      errorMsg = `${error.errors[0].status} - ${error.errors[0].title}: ${error.errors[0].detail}`;
    } else if (error.originalError) {
      errorMsg = `${error.originalError}`;
    }

    return <div className="alert alert-danger">{errorMsg}</div>;
  }

  if (!!fetching) {
    return <div className="alert alert-info">Fetching...</div>;
  }

  return "";
}
