import { Button } from '@/shared/components/button'
import { IconButton } from '@/shared/components/icon-button'
import { Icon } from '@/shared/components/icon'
import { Card } from '@/shared/components/card'
import { Textarea } from '@/shared/components/textarea'
import { useChangeBackground } from '../model/useChangeBackground'
import { BackgroundItem } from './BackgroundItem'

/**
 * Feature component for changing background
 */
export function ChangeBackground() {
  const {
    backgroundIdea,
    isTextareaFocused,
    backgrounds,
    isGenerating,
    setIsTextareaFocused,
    handleTextareaChange,
    handleRegenerate,
    handleBack,
    handleNext,
    handleGenerate,
  } = useChangeBackground()

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <span className="font-italian-plate font-demibold text-sm text-[rgba(0,0,0,1)]">
          Background idea
        </span>

        <Card isActive={isTextareaFocused} className="p-0 flex flex-col">
          <Textarea
            value={backgroundIdea}
            onChange={handleTextareaChange}
            onFocus={() => setIsTextareaFocused(true)}
            onBlur={() => setIsTextareaFocused(false)}
            placeholder="Describe your background idea..."
            className="flex-1"
          />

          <div className="flex items-center justify-between pr-[16px] pl-[9px] pb-[9px] pt-[20px]">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleRegenerate}
              className="gap-2"
            >
              <Icon iconName="ai" size={16} />
              <span className="font-italian-plate font-demibold text-xs text-[rgba(0,0,0,1)]">
                Regenerate
              </span>
            </Button>

            <div className="flex gap-2">
              <IconButton
                variant="ghost"
                iconName="back"
                iconSize={16}
                buttonSize={32}
                fillColorOnHover="rgba(0, 0, 0, 1)"
                onClick={handleBack}
              />
              <IconButton
                variant="ghost"
                iconName="next"
                iconSize={16}
                buttonSize={32}
                fillColorOnHover="rgba(0, 0, 0, 1)"
                onClick={handleNext}
              />
            </div>
          </div>
        </Card>

        <Button
          onClick={handleGenerate}
          className="w-full gap-2 !mt-6"
          disabled={isGenerating}
        >
          <Icon iconName="ai" size={16} />
          <span className="font-italian-plate font-demibold text-sm text-[rgba(255,255,255,1)]">
            Generate BG for 1 credit
          </span>
        </Button>
      </div>

      <div className="space-y-3">
        <span className="font-italian-plate font-demibold text-sm text-[rgba(0,0,0,1)]">
          Your backgrounds
        </span>

        <div className="grid grid-cols-3 gap-x-3 gap-y-3 overflow-x-hidden">
          {backgrounds.map(background => (
            <BackgroundItem key={background.id} background={background} />
          ))}
        </div>
      </div>
    </div>
  )
}
