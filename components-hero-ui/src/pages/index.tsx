import { card as cardStyles } from '@heroui/theme';

import { Upload } from '@/components/forms/Upload';
import DefaultLayout from '@/layouts/default';

export default function IndexPage() {
  const { base } = cardStyles();

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className={base({ radius: 'sm', className: 'p-3' })}>
          <Upload typeFilesAccept={{ 'image/*': ['.png', '.jpg', '.jpeg'] }} />
        </div>
      </section>
    </DefaultLayout>
  );
}
