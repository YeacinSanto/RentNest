import { cloudinary } from "../config/cloudinary";

export const uploadImageToCloudinary = (fileBuffer: Buffer, folder: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
            { folder, resource_type: "image" },
            (error, result) => {
                if (error || !result) {
                    return reject(error ?? new Error("Image upload failed"));
                }
                resolve(result.secure_url);
            }
        );

        uploadStream.end(fileBuffer);
    });
};
