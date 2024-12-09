import { VISION_URL } from '@/configs/app';
import axios from 'axios';

export const filterTextImage = async (files: File[]):Promise<boolean[]> => {
  try {
    const requests = await Promise.all(
      files.map(async (file) => {
        const base64Image = await convertFileToBase64(file);
        return {
          image: { content: base64Image },
          features: [{ type: "TEXT_DETECTION" }]
        };
      })
    );

    const payload = {
      requests,
    };

    const response = await axios.post(VISION_URL, payload, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    const result = response.data.responses;
    return result.map((res: any) => !!res.fullTextAnnotation);
  } catch (error) {
    return [];
  }
};

const convertFileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const base64data = reader.result?.toString().replace(/^data:image\/(png|jpeg|jpg);base64,/, "");
      resolve(base64data || "");
    };
    reader.onerror = (error) => reject(error);
  });
};
