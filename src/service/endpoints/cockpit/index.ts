'use server';
import { apiService } from "@/service/api";

interface GetCockpitParams {
  params: string;
}

const getCockpit = async ({ params }: GetCockpitParams) => {
  const url = `${process.env.COCKPIT_URL}/api/${params}`;
  const apiKey = process.env.COCKPIT_API_KEY_LP || '';

  try {
    const {data} = await apiService({
      url, 
      method: 'GET' ,
      headers: {
        'api-key': apiKey,
      },
    });

    return data;
  } catch (error) {
    throw error;
  }
};

export { getCockpit };