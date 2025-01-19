import { toPng } from "html-to-image";

export const saveCodeSnapshot = async (id: string, filename: string, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
  const image = document.getElementById(id);
  if (!image) {
    return;
  }

  try {
    setLoading(true);
    const downloadLink = await toPng(image);
    const link = document.createElement("a");
    link.download = filename;
    link.href = downloadLink;
    link.click();
  } catch (err) {
    console.error("An error occurred while attempting to export the image", err);
  } finally {
    setLoading(false);
  }
};
