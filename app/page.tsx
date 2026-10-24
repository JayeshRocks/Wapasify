'use client';

import { useCallback, useRef, useState } from 'react';
import TopBar from '@/components/TopBar';
import Hero from '@/components/Hero';
import ItemGrid from '@/components/ItemGrid';
import MatchBanner from '@/components/MatchBanner';
import HowItWorks from '@/components/HowItWorks';
import Footer from '@/components/Footer';
import ReportModal from '@/components/ReportModal';
import Toast from '@/components/Toast';
import { demoItems, DemoItem, ItemKind } from '@/lib/demo-data';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalKind, setModalKind] = useState<ItemKind>('lost');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastVisible, setToastVisible] = useState(false);
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showToast = useCallback((msg: string) => {
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
    setToastMessage(msg);
    setToastVisible(true);
    toastTimeoutRef.current = setTimeout(() => {
      setToastVisible(false);
    }, 3100);
  }, []);

  const openReport = useCallback((kind: ItemKind) => {
    setModalKind(kind);
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  const handleItemClick = useCallback(
    (item: DemoItem) => {
      showToast(
        item.kind === 'found'
          ? 'Demo detail: a real claim would ask you to verify a private detail.'
          : 'Demo detail: a real report would be visible only under campus access rules.'
      );
    },
    [showToast]
  );

  const showMatches = useCallback(() => {
    setSearchQuery('headphones');
    setActiveFilter('all');
    const browseElem = document.getElementById('browse');
    if (browseElem) {
      browseElem.scrollIntoView({ behavior: 'smooth' });
    }
    showToast(
      'One possible demo match shown. A real match would need private verification.'
    );
  }, [showToast]);

  const handleReportDemo = useCallback(
    (title: string) => {
      showToast(
        `Demo only: “${title}” was not submitted or saved. Add a backend before real use.`
      );
    },
    [showToast]
  );

  return (
    <>
      <div className="shell">
        <TopBar
          onReportLost={() => openReport('lost')}
          onReportFound={() => openReport('found')}
        />
        <main id="top">
          <Hero onReportLost={() => openReport('lost')} />
          <ItemGrid
            items={demoItems}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            onOpenReportFound={() => openReport('found')}
            onItemClick={handleItemClick}
          />
          <MatchBanner onShowMatches={showMatches} />
          <HowItWorks />
        </main>
      </div>
      <Footer />
      <ReportModal
        isOpen={modalOpen}
        initialKind={modalKind}
        onClose={closeModal}
        onSubmitDemo={handleReportDemo}
      />
      <Toast message={toastMessage} isVisible={toastVisible} />
    </>
  );
}
