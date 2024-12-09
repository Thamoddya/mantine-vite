import notification from "@/utils/notification";
import { api } from "../../constants/route";
import http from "../../utils/http";

export const fileUpload = async (files: File[]): Promise<string[]> => {
  try {
    const fileUrls = await Promise.all(
      files.map(async (file) => {
        const formData = new FormData();
        formData.append("file", file);

        try {
          const response = await http.post<{ fileUrl: string }>(
            api.image_upload,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          return response.data.fileUrl;
        } catch (error) {
          notification(`Error uploading file: ${file.name}`);
          throw error;
        }
      })
    );

    const successfulUploads = fileUrls.filter((url) => url !== "");
    if (successfulUploads.length < files.length) {
      notification("Some files failed to upload.");
    }

    return successfulUploads;
  } catch (error) {
    notification("Critical error during the file upload process.");
    throw error;
  }
};
