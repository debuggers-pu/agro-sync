import {
  getAnimalValue,
  createAnimalValue,
  updateAnimalValue,
  deleteAnimalValue,
} from "../api/animalValue/animalValue";

import { useMutation, useQuery } from "@tanstack/react-query";
import { onOpenToast } from "@utils/toast";

function useAnimalValue({ animalValueId }) {
  return useQuery(
    [`animalValue-${animalValueId}`],
    () => getAnimalValue({ animalValueId }),
    {
      enabled: !!animalValueId,
    }
  );
}

function useAllAnimalValue() {
  return useQuery([`all-animalValue`], () => getAnimalValue(), {
    onSuccess: () => {
      onOpenToast({
        status: "success",
        message: "All animalValue fetched successfuly",
      });
    },
    onError: (/*data*/) => {
      onOpenToast({
        status: "error",
        message: "AnimalValue not fetched",
      });
    },
  });
}

function useCreateAnimalValue() {
  return useMutation(
    ["create-animalValue"],
    (data) => createAnimalValue(data),
    {
      onSuccess: () => {
        onOpenToast({
          status: "success",
          message: "AnimalValue created successfully",
        });
      },
      onError: (/*data*/) => {
        onOpenToast({
          status: "error",
          message: "AnimalValue not created",
        });
      },
    }
  );
}

function useUpdateAnimalValue() {
  return useMutation(
    ["update-animalValue"],
    (data) => updateAnimalValue(data),
    {
      onSuccess: () => {
        onOpenToast({
          status: "success",
          message: "AnimalValue Updated successfully",
        });
      },
      onError: (/*data*/) => {
        onOpenToast({
          status: "error",
          message: "AnimalValue not created",
        });
      },
    }
  );
}

function useDeleteAnimalValue() {
  return useMutation(
    ["delete-animalValue"],
    (data) => deleteAnimalValue(data),
    {
      onSuccess: () => {
        onOpenToast({
          status: "success",
          message: "AnimalValue Deleted successfully",
        });
      },
      onError: (/*data*/) => {
        onOpenToast({
          status: "error",
          message: "AnimalValue not created",
        });
      },
    }
  );
}

export {
  useAnimalValue,
  useAllAnimalValue,
  useCreateAnimalValue,
  useUpdateAnimalValue,
  useDeleteAnimalValue,
};
