export default function Snapshot({ title, organization }) {
    return (
        <div className="max-w-sm mx-auto bg-[#ccc5b9] p-6 rounded-lg shadow-2xl">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="card">
                {organization}
            </p>
        </div>

    )
}