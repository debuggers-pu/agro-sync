import {
  getAnimal,
  createAnimal,
  updateAnimal,
  deleteAnimal,
} from "../api/animal/animal";

import { useMutation, useQuery } from "@tanstack/react-query";
import { onOpenToast } from "@utils/toast";

function useAnimal({ animalId }) {
  return useQuery([`animal-${animalId}`], () => getAnimal({ animalId }), {
    enabled: !!animalId,
  });
}

function useAllAnimal() {
  return useQuery([`all-animal`], () => getAnimal(), {
    onSuccess: () => {
      onOpenToast({
        status: "success",
        message: "All animal fetched successfuly",
      });
    },
    onError: (/*data*/) => {
      onOpenToast({
        status: "error",
        message: "Animal not fetched",
      });
    },
  });
}

function useCreateAnimal() {
  return useMutation(["create-animal"], (data) => createAnimal(data), {
    onSuccess: () => {
      onOpenToast({
        status: "success",
        message: "Animal created successfully",
      });
    },
    onError: (/*data*/) => {
      onOpenToast({
        status: "error",
        message: "Animal not created",
      });
    },
  });
}

function useUpdateAnimal() {
  return useMutation(["update-animal"], (data) => updateAnimal(data), {
    onSuccess: () => {
      onOpenToast({
        status: "success",
        message: "Animal Updated successfully",
      });
    },
    onError: (/*data*/) => {
      onOpenToast({
        status: "error",
        message: "Animal not created",
      });
    },
  });
}

function useDeleteAnimal() {
  return useMutation(["delete-animal"], (data) => deleteAnimal(data), {
    onSuccess: () => {
      onOpenToast({
        status: "success",
        message: "Animal Deleted successfully",
      });
    },
    onError: (/*data*/) => {
      onOpenToast({
        status: "error",
        message: "Animal not Deleted",
      });
    },
  });
}

export {
  useAnimal,
  useAllAnimal,
  useCreateAnimal,
  useUpdateAnimal,
  useDeleteAnimal,
};
