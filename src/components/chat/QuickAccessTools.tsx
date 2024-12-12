import React from 'react';
import { BookOpen, FileText, Beaker } from 'lucide-react';
import { cn } from '../../lib/utils';

interface QuickAccessToolsProps {
  onToolSelect: (tool: string) => void;
  className?: string;
}

export const QuickAccessTools: React.FC<QuickAccessToolsProps> = ({
  onToolSelect,
  className
}) => {
  const tools = [
    { id: 'protocols', label: 'Protocolos', icon: BookOpen },
    { id: 'treatments', label: 'Tratamentos', icon: Beaker },
    { id: 'cases', label: 'Análise de Casos', icon: FileText }
  ];

  return (
    <div className={cn("grid grid-cols-3 gap-4", className)}>
      {tools.map((tool) => {
        const Icon = tool.icon;
        return (
          <button
            key={tool.id}
            onClick={() => onToolSelect(tool.id)}
            className="flex flex-col items-center p-4 rounded-lg border-2 border-gray-200 
                     hover:border-primary hover:bg-primary/5 transition-colors"
          >
            <Icon className="w-8 h-8 text-primary mb-2" />
            <span className="text-sm font-medium text-foreground">{tool.label}</span>
          </button>
        );
      })}
    </div>
  );
};