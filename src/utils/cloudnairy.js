import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_CLOUD_API_KEY, 
    api_secret:process.env.CLOUDINARY_CLOUD_API_SECRET
});


const uploadOnCloudiray = async(localFilesPath) => {
    try {
        if(!localFilesPath) return null
        //upload the files on cloundry
        const response = await cloudinary.upload(localFilesPath , {
            resource_type : "auto"
        })
        // files has been uploaded succesfull
        console.log("files is uploaded on  cloudinary",response.url);
        return response
    } catch (error) {
        fs.unlinkSync(localFilesPath) //remove the locall saved temporary as the upload operation got failed
        return null;
    }
}

export{uploadOnCloudiray}