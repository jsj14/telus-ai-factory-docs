import { DocsLayout } from 'fumadocs-ui/layout';
import type { ReactNode } from 'react';
import { source } from '@/app/source';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree as any}
      nav={{
        title: (
          <div>
            <div className="font-bold">TELUS AI Factory</div>
            <div className="text-xs text-muted-foreground">for ML Engineers - Developer Hub</div>
          </div>
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}
