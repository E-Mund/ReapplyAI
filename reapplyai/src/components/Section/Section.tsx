import "./section.css"

interface sectionProps {
    key: number;
};

export default function Section(props: sectionProps) {
    return (
        <div className="section rounded-2xl">
          <label htmlFor="section">Section</label>
          <input type="text" name="section" placeholder="Enter section title" />
          <label htmlFor="contents">Contents</label>
          <input type="text" name="contents" placeholder="Enter section contents" />
        </div>
    );
}