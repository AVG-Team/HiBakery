export default function Breadcrumb() {
    return (
        <nav className="flex flex-col max-w-full text-sm text-gray-500 w-[277px]" aria-label="Breadcrumb">
            <div className="flex flex-col w-full rounded-md max-w-[277px]">
                <div className="flex items-center gap-3 pl-2">
                    <a href="/" className="self-stretch my-auto whitespace-nowrap">
                        Trang chủ
                    </a>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f12eb4a02292e63a5121e7244c458dd5fc81f6326cb3f7629ebd88003ef39d28?placeholderIfAbsent=true&apiKey=3abcd0b3a02d454c939536d464120375"
                        alt=""
                        className="object-contain shrink-0 self-stretch my-auto w-4 aspect-[1.07]"
                    />
                    <a href="/san-pham" className="self-stretch my-auto whitespace-nowrap">
                        Sản phẩm
                    </a>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/56b524083874d4c94b0504e0b2f59c5096de7f45845fe8036e26a6fea569feef?placeholderIfAbsent=true&apiKey=3abcd0b3a02d454c939536d464120375"
                        alt=""
                        className="object-contain shrink-0 self-stretch my-auto w-4 aspect-[1.07]"
                    />
                    <span className="self-stretch my-auto text-sky-700">Chi tiết</span>
                </div>
                <div className="flex mt-2 w-full bg-sky-700 min-h-[1px]" />
            </div>
        </nav>
    );
}
