import {} from "vee-validate";
import {} from "@vee-validate/zod";
import * as zod from "zod";


const animalValueSchema = zod.object({
  name: zod.string().required("Name is required."),
  category: zod.string().required("Category is required."),
});

export default animalValueSchema;