import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";

import { useLazyQuery } from "@apollo/client";

const FireflyAutoComplete = (props: any) => {
  const [options, setOptions] = React.useState<readonly any[]>([]);
  const [_controller, set_controller] = React.useState(new AbortController()); // state

  const [getRates, { loading: loadingRates }] = useLazyQuery(props.graphql, {
    context: {
      fetchOptions: { signal: _controller.signal },
 //     queryDeduplication: false,
    },
  });

  const getListAssincrona = async (searchText: string, r: string) => {
    if (loadingRates) {
      _controller.abort();
    }
    if (r === "input" && searchText.length > props.minCaracteres) {
      await set_controller(new AbortController());

      var key = props.searchText;

      const course = {
        [key]: searchText,
      };

      const data = await getRates({ variables: course });

      if (props.secondLevel) {
        setOptions(data.data[props.firstLevel][props.secondLevel]);
      } else {
        setOptions(data.data[props.firstLevel]);
      }
    }
    if (r === "input" && searchText.length <= props.minCaracteres) {
      setOptions([]);
    }
  };

  return (
    <Autocomplete
      autoHighlight={true}
      autoComplete={true}
      onInputChange={(e, v: string, r: string) => getListAssincrona(v, r)}
      id="asynchronous-demo"
      sx={{ width: 500 }}
      isOptionEqualToValue={(option, value) => {
        return option[props.searchText] === value[props.searchText];
      }}
      getOptionLabel={(option) => {
        return option[props.answerText];
      }}

      onChange={(e,v) => {
        props.onChange(e,v);
      }
      }

      options={options}
      loading={loadingRates || options.length === 0}
      loadingText={props.loadingText}
      noOptionsText={props.noOptionsText}
      renderInput={(params) => (
        <TextField
          {...params}
          label={props.label}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loadingRates ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
};

export default FireflyAutoComplete;