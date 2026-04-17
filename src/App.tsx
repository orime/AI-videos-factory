/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sidebar } from './components/Sidebar';
import { TopHeader } from './components/TopHeader';
import { TopStats } from './components/TopStats';
import { Pipeline } from './components/Pipeline';
import { ProductionList } from './components/ProductionList';
import { StoryboardEditor } from './components/StoryboardEditor';
import { RightPanel } from './components/RightPanel';

export default function App() {
  return (
    <div className="flex bg-[#070514] h-screen w-screen overflow-hidden text-white font-sans selection:bg-neon-purple selection:text-white">
      {/* Background ambient glow setup */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-purple opacity-20 blur-[150px] rounded-full mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-neon-blue opacity-10 blur-[150px] rounded-full mix-blend-screen"></div>
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-yellow-500 opacity-10 blur-[150px] rounded-full mix-blend-screen"></div>
      </div>

      <Sidebar />
      
      <div className="flex-1 flex flex-col relative h-full max-h-screen overflow-hidden">
        <TopHeader />
        
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col pt-24 px-6 pb-6 overflow-hidden z-0">
           <TopStats />
           <Pipeline />
           
           <div className="flex-1 flex gap-4 mt-4 overflow-hidden min-h-0">
             <div className="w-[26%] flex flex-col h-full min-h-0">
                <ProductionList />
             </div>
             
             <div className="w-[50%] flex flex-col h-full min-h-0">
                <StoryboardEditor />
             </div>
             
             <div className="w-[24%] flex flex-col h-full min-h-0 overflow-hidden">
                <RightPanel />
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
