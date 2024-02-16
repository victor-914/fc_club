import { getIn } from "formik";
import { Box,MenuItem, Select } from "@mui/material";
import TextField from "@mui/material/TextField";
import useMediaQuery from "@mui/material/useMediaQuery";
import { countries } from "../../utils/countries";
const AddressForm = ({
  type,
  values,
  touched,
  errors,
  handleBlur,
  handleChange,
}) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  // these functions allow for better code readability
  const formattedName = (field) => `${type}.${field}`;

  const formattedError = (field) =>
    Boolean(
      getIn(touched, formattedName(field)) &&
        getIn(errors, formattedName(field))
    );

  const formattedHelper = (field) =>
    getIn(touched, formattedName(field)) && getIn(errors, formattedName(field));

  return (
    <Box
      display="grid"
      gap="20px"
      gridTemplateColumns="repeat(4, minmax(0, 1fr))"
      sx={{
        "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
      }}
    >
      <TextField
        fullWidth
        type="email"
        label="Email"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.email}
        name={formattedName("email")}
        error={formattedError("email")}
        helperText={formattedHelper("email")}
        sx={{ gridColumn: "span 2" }}
      />
      <TextField
        fullWidth
        type="number"
        label="Phone number"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.phoneNumber}
        name={formattedName("phoneNumber")}
        error={formattedError("phoneNumber")}
        helperText={formattedHelper("phoneNumber")}
        sx={{ gridColumn: "span 2" }}
      />

      <Select
        fullWidth
        label="Country"
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="country"
        value={values.country}
        name={formattedName("country")}
        error={formattedError("country")}
        helperText={formattedHelper("country")}
        sx={{
          margin: "5px",
          gridColumn: "span 2",
        }}
      >
        <MenuItem value="" disabled>
          Select Country
        </MenuItem>
        {countries.map((country) => (
          <MenuItem key={country.name} value={country.name}>
            {country.name}
          </MenuItem>
        ))}
      </Select>
      <TextField
        fullWidth
        type="text"
        label="Street Address"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.street1}
        name={formattedName("street1")}
        error={formattedError("street1")}
        helperText={formattedHelper("street1")}
        sx={{ gridColumn: "span 4" }}
      />
      <TextField
        fullWidth
        type="text"
        label="City"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.city}
        name={formattedName("city")}
        error={formattedError("city")}
        helperText={formattedHelper("city")}
        sx={{ gridColumn: "span 2" }}
      />
      <TextField
        fullWidth
        type="text"
        label="State"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.state}
        name={formattedName("state")}
        error={formattedError("state")}
        helperText={formattedHelper("state")}
        sx={{ gridColumn: "1fr" }}
      />
      <TextField
        fullWidth
        type="number"
        label="Zip Code"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.zipCode}
        name={formattedName("zipCode")}
        error={formattedError("zipCode")}
        helperText={formattedHelper("zipCode")}
        sx={{ gridColumn: "1fr" }}
      />
    </Box>
  );
};

export default AddressForm;
