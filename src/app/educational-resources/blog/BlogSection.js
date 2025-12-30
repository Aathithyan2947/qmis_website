import React from 'react';

export default function BlogSection({ section }) {
  return (
    <div
      className="blog-content prose max-w-none"
      dangerouslySetInnerHTML={{ __html: section }}
    />
  );
}
