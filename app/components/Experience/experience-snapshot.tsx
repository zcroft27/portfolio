import Link from "next/link";

export default function Snapshot({ title, organization, imgSrc }) {
    return (
        <Link href="/experience" style={{ textDecoration: 'none' }}>
            <div className="w-60 min-h-[140px] bg-[#f4f3ee] h-full p-2 rounded-lg shadow-2xl flex items-center justify-between cursor-pointer no-underline">
                <div className="flex-row p-1">
                    <h2 className="text-5xl text-[#000000] !font-[650] mb-1 leading-tight break-words">{title}</h2>
                    <p className="text-sm break-words">
                        at <span className="font-bold">{organization}</span>
                    </p>
                </div>
                <img src={imgSrc} className="w-16 h-16 object-contain" alt="Organization Logo" />
            </div>
        </Link>
    );
}
