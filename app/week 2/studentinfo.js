import Link from 'next/link';

export default function StudentInfo() {
  return (
    <div>
      <p>Your Name</p>
      <p>
        <Link href="https://github.com/altesse-imena/cprg306-assignments">
          Your GitHub Repository
        </Link>
      </p>
    </div>
  );
}
