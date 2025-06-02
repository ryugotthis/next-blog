import { ReactNode } from 'react';
import Link from 'next/link';
import { UserCircle, Code2, FolderGit2, Briefcase, Mail } from 'lucide-react';

interface AboutLayoutProps {
  children: ReactNode;
}

const menuItems = [
  { name: '프로필', href: '/about', icon: UserCircle },
  { name: '기술 스택', href: '/about/skills', icon: Code2 },
  { name: '프로젝트', href: '/about/projects', icon: FolderGit2 },
  { name: '경력', href: '/about/career', icon: Briefcase },
  { name: '연락처', href: '/about/contact', icon: Mail },
];

export default function AboutLayout({ children }: AboutLayoutProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-8">
        {/* 사이드바 */}
        <aside className="w-64 flex-shrink-0">
          <nav className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* 메인 콘텐츠 */}
        <main className="flex-1 min-w-0">{children}</main>
      </div>
    </div>
  );
}
