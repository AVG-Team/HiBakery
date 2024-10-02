export default function ProductImage() {
    return (
        <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/43a269705cfba1883e55f67633cb651378b47207b0f8cb4c27ada3a8ece7bb8d?placeholderIfAbsent=true&apiKey=3abcd0b3a02d454c939536d464120375" alt="Product" className="object-contain mt-8 w-full rounded-2xl aspect-[1.14] max-md:mt-10" />
        </div>
    );
}