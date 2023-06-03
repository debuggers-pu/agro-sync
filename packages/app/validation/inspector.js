import {} from "vee-validate";
import {} from "@vee-validate/zod";
import * as zod from "zod";

const inspectorSchema = zod.object({
  name: zod.string().required("Name is required."),
  post: zod.required("Post is required."),
  officename: zod.string().required("Office name is required.")
});

export default inspectorSchema;