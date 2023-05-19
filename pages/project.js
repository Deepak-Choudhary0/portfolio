import Link from 'next/link';

export default function Projects() {
  return (
    <div>
      <h1>My Projects</h1>
      <ul>
        <li>
          <Link href="/projects/project1">
            <a>Project 1</a>
          </Link>
        </li>
        <li>
          <Link href="/projects/project2">
            <a>Project 2</a>
          </Link>
        </li>
        <li>
          <Link href="/projects/project3">
            <a>Project 3</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
