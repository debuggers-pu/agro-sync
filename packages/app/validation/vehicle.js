import {} from "vee-validate";
import {} from "@vee-validate/zod";
import * as zod from "zod";


const vechileSchema = zod.object({
  zone: string().required("Zone is required."),
  province: string().required("Province is required."),
  type: string().required("Type is required."),
  number: number()
    .min(9, "Too short. Minimum 9 characters.")
    .max(10, "Max number reached. Maximum 10 characters.")
    .required("Number is required."),
  size: string().required("Size is required."),
});

export default vechileSchema;