import Snapshot from "../components/Experience/experience-snapshot"
import SkillCard from "../components/Skill/skill-card"
import content from "../content/content"

export default function Page() {
    return (
        <>
            <h1 className="text-4xl lg:text-6xl font-semibold tracking-tighter">
                Skills
            </h1>
            <div className="grid grid-cols-2 gap-2 lg:grid-cols-8 lg:gap-8">
                {
                    content.skills.map((entry) => (
                        <SkillCard skill={entry.skill} image={entry.image} />
                    ))
                }
            </div >
            <h1 className="text-4xl lg:text-6xl font-semibold tracking-tighter">
                Roles
            </h1>
        </>
    )
}