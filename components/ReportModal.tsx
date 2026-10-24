'use client';

import { useEffect, useState } from 'react';
import { ItemKind } from '@/lib/demo-data';

interface ReportModalProps {
  isOpen: boolean;
  initialKind: ItemKind;
  onClose: () => void;
  onSubmitDemo: (title: string, kind: ItemKind) => void;
}

export default function ReportModal({
  isOpen,
  initialKind,
  onClose,
  onSubmitDemo,
}: ReportModalProps) {
  const [kind, setKind] = useState<ItemKind>(initialKind);
  const [prevInitialKind, setPrevInitialKind] = useState(initialKind);
  const [category, setCategory] = useState('Electronics');
  const [title, setTitle] = useState('');
  const [area, setArea] = useState('Library');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  if (initialKind !== prevInitialKind) {
    setPrevInitialKind(initialKind);
    setKind(initialKind);
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedTitle = title.trim();
    if (!trimmedTitle) return;

    onSubmitDemo(trimmedTitle, kind);

    // Reset form state
    setTitle('');
    setDescription('');
    setDate('');
    onClose();
  };

  const modalTitle =
    kind === 'found' ? 'Report something found' : 'Report something lost';

  return (
    <div
      className="modal-backdrop show"
      id="reportModal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="modal">
        <div className="modal-head">
          <div>
            <div className="eyebrow">Quick campus report</div>
            <h2 id="modalTitle">{modalTitle}</h2>
          </div>
          <button
            className="close"
            type="button"
            aria-label="Close modal"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <div className="demo-alert">
          Prototype only: submitting shows a local confirmation. It does not
          create a real campus report.
        </div>

        <form id="reportForm" onSubmit={handleSubmit}>
          <div className="field-grid">
            <div className="field">
              <label htmlFor="kind">I…</label>
              <select
                id="kind"
                value={kind}
                onChange={(e) => setKind(e.target.value as ItemKind)}
              >
                <option value="lost">Lost something</option>
                <option value="found">Found something</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="category">Category</label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Electronics</option>
                <option>Keys &amp; accessories</option>
                <option>Books &amp; stationery</option>
                <option>Cards &amp; documents</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div className="field">
            <label htmlFor="title">What is it?</label>
            <input
              id="title"
              required
              maxLength={70}
              placeholder="e.g. Blue water bottle"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="field-grid">
            <div className="field">
              <label htmlFor="area">Broad campus area</label>
              <select
                id="area"
                value={area}
                onChange={(e) => setArea(e.target.value)}
              >
                <option>Library</option>
                <option>Student centre</option>
                <option>Sports ground</option>
                <option>Academic block</option>
                <option>Cafeteria</option>
                <option>Other / prefer not to say</option>
              </select>
            </div>
            <div className="field">
              <label htmlFor="when">When?</label>
              <input
                id="when"
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="description">
              Description{' '}
              <span style={{ fontWeight: 400, color: 'var(--muted)' }}>
                (keep one detail private)
              </span>
            </label>
            <textarea
              id="description"
              maxLength={240}
              placeholder="Share useful details without exposing a unique ownership clue."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <button className="btn btn-primary" type="submit">
            Preview demo report <span>↗</span>
          </button>
        </form>
      </div>
    </div>
  );
}
