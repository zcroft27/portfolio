export default function SkillCard({ skill, image }) {
    return (
        <div className="w-28 h-28 p-6 rounded-lg shadow-2xl flex flex-col items-center justify-center">
            <h2 className="text-xl font-semibold mb-4">{skill}</h2>
            <img
                src={image}
                alt={skill}
                className="w-12 h-12 object-contain"
            />
        </div>
    );
}
