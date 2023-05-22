import { FormEvent, useState } from "react";
import { IssueFilter, DifficultyLevels } from "../types/types";
import styles from "@/styles/SearchForm.module.css";

interface Props {
  onFilterChange: (filter: IssueFilter) => void;
}

const languages = [
  "All",
  "JavaScript",
  "Python",
  "Java",
  "C++",
  "C#",
  "Ruby",
  "Go",
  "TypeScript",
  "Swift",
  "Kotlin",
  "Rust",
  "PHP",
  "Scala",
  "Perl",
];

export default function SearchForm({ onFilterChange }: Props) {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [filter, setFilter] = useState<IssueFilter>({});
  const [selectedDifficulty, setSelectedDifficulty] = useState(
    DifficultyLevels.ALL
  );

  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    onFilterChange(filter);
  };

  const selectedLanguageChanged = (language: string) => {
    const currFilter = { ...filter, language };
    setSelectedLanguage(language);
    setFilter(currFilter);
  };

  const difficultyLevelChanged = (level: string) => {
    const currFilter = { ...filter, difficultyLevel: level };
    setSelectedDifficulty(level);
    setFilter(currFilter);
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formHeader}>Filter Issues</h2>
      <form onSubmit={submitForm}>
        <fieldset>
          <label htmlFor="languageSelect">Language</label>
          <select
            className={styles.languageSelect}
            onChange={(e) => selectedLanguageChanged(e.currentTarget.value)}
            value={selectedLanguage}
          >
            {languages.map((language) => (
              <option value={language} key={language}>
                {language}
              </option>
            ))}
          </select>
        </fieldset>
        <fieldset className={styles.difficultyFieldset}>
          <label>Difficulty Level</label>
          <DifficultySelector
            value={selectedDifficulty}
            onChange={(diffLevel) => difficultyLevelChanged(diffLevel)}
          />
        </fieldset>

        <fieldset>
          <button className={styles.submitButton} type="submit">
            Update Results
          </button>
        </fieldset>
      </form>
    </div>
  );
}

function DifficultySelector({
  value,
  onChange,
}: {
  value: string;
  onChange: (diffLevel: string) => void;
}) {
  return (
    <div className={styles.difficultyLevelSelector}>
      <span
        className={createDifficultyClasses(
          value === DifficultyLevels.ALL,
          styles.allSelector
        )}
        onClick={() => onChange(DifficultyLevels.ALL)}
      >
        All
      </span>

      <span
        className={createDifficultyClasses(
          value === DifficultyLevels.BEGINNER,
          styles.beginnerSelector
        )}
        onClick={() => onChange(DifficultyLevels.BEGINNER)}
      >
        Beginner
      </span>

      <span
        className={createDifficultyClasses(
          value === DifficultyLevels.INTERMEDIATE,
          styles.intermediateSelector
        )}
        onClick={() => onChange(DifficultyLevels.INTERMEDIATE)}
      >
        Intermediate
      </span>

      <span
        className={createDifficultyClasses(
          value === DifficultyLevels.ADVANCED,
          styles.advancedSelector
        )}
        onClick={() => onChange(DifficultyLevels.ADVANCED)}
      >
        Advanced
      </span>
    </div>
  );
}

function createDifficultyClasses(selected: boolean, ...classNames: string[]) {
  const c = classNames.join(" ");
  if (selected) {
    return `${c} ${styles.selected}`;
  } else {
    return c;
  }
}
