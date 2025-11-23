export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

export async function GET() {
  const filePath = resolve(process.cwd(), 'public', 'Indofil-M-45-Presentation.pptx');
  const buffer = await readFile(filePath);
  return new Response(buffer, {
    headers: {
      'Content-Type': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      'Content-Disposition': 'attachment; filename="Indofil-M-45-Presentation.pptx"',
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  });
}
