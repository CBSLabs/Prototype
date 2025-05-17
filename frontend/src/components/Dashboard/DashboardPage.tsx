"use client";

import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { youtubeUrlValidation } from "@/validations/zodValidations";
import axios from "axios";
import { BACKEND_URL } from "../../../config";

export function DashboardPage() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof youtubeUrlValidation>>({
    defaultValues: {
      url: "",
    },
    resolver: zodResolver(youtubeUrlValidation),
  });

  const onSubmit: SubmitHandler<z.infer<typeof youtubeUrlValidation>> = async (
    data
  ) => {
    try {
      // TODO: DO REAL API CALL
      const response = await axios.post(`${BACKEND_URL}`, {
        url: data.url,
      });
      console.log("Response data: ", response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error message: ", error.message);
      } else {
        console.error("Unexpected error: ", error);
      }
    }
  };

  return (
    <div className="">
      <div className="mt-14 mb-4">
        <h1 className="text-2xl font-semibold">
          Ready to create Shorts in seconds?
        </h1>
        <p className="text-sm text-muted-foreground">
          Paste your YouTube video link and let Lumora do the rest.
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative w-full h-full"
      >
        <Controller
          control={control}
          name="url"
          render={({ field }) => (
            <input
              {...field}
              type="url"
              placeholder="Paste your YouTube video link here"
              className="border py-4 px-6 w-full h-full focus:outline-none bg-secondary/30"
            />
          )}
        />
        <button
          type="submit"
          className="absolute top-0 right-0 flex items-center justify-center h-full border-l px-5 font-semibold text-muted-foreground bg-secondary/40"
        >
          Convert
        </button>
      </form>
      {errors.url && (
        <p role="alert" className="text-sm text-red-500 mt-1">
          {errors.url.message}
        </p>
      )}
    </div>
  );
}
