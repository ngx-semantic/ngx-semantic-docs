import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import snippetSpecifyingRules from './snippets/specifying-rules.sample.html' with { loader: 'text' };
import snippetSpecifyingRulesTs from './snippets/specifying-rules.sample.txt' with { loader: 'text' };
import snippetLonghand from './snippets/longhand.sample.html' with { loader: 'text' };
import snippetLonghandTs from './snippets/longhand.sample.txt' with { loader: 'text' };
import snippetParameters from './snippets/parameters.sample.html' with { loader: 'text' };
import snippetParametersTs from './snippets/parameters.sample.txt' with { loader: 'text' };
import snippetPrompts from './snippets/prompts.sample.html' with { loader: 'text' };
import snippetPromptsTs from './snippets/prompts.sample.txt' with { loader: 'text' };
import snippetMatchingFields from './snippets/matching-fields.sample.html' with { loader: 'text' };
import snippetMatchingFieldsTs from './snippets/matching-fields.sample.txt' with { loader: 'text' };
import snippetInline from './snippets/inline.sample.html' with { loader: 'text' };
import snippetInlineTs from './snippets/inline.sample.txt' with { loader: 'text' };
import snippetDependent from './snippets/dependent.sample.html' with { loader: 'text' };
import snippetDependentTs from './snippets/dependent.sample.txt' with { loader: 'text' };
import snippetOptional from './snippets/optional.sample.html' with { loader: 'text' };
import snippetOptionalTs from './snippets/optional.sample.txt' with { loader: 'text' };
import snippetProgrammatic from './snippets/programmatic.sample.html' with { loader: 'text' };
import snippetProgrammaticTs from './snippets/programmatic.sample.txt' with { loader: 'text' };
import snippetReactive from './snippets/reactive.sample.html' with { loader: 'text' };
import snippetReactiveTs from './snippets/reactive.sample.txt' with { loader: 'text' };
import snippetRuleEmpty from './snippets/rule-empty.sample.html' with { loader: 'text' };
import snippetRuleEmptyTs from './snippets/rule-empty.sample.txt' with { loader: 'text' };
import snippetRuleContentType from './snippets/rule-content-type.sample.html' with { loader: 'text' };
import snippetRuleContentTypeTs from './snippets/rule-content-type.sample.txt' with { loader: 'text' };
import snippetRulePayment from './snippets/rule-payment.sample.html' with { loader: 'text' };
import snippetRulePaymentTs from './snippets/rule-payment.sample.txt' with { loader: 'text' };
import snippetRuleMatching from './snippets/rule-matching.sample.html' with { loader: 'text' };
import snippetRuleMatchingTs from './snippets/rule-matching.sample.txt' with { loader: 'text' };
import snippetRuleLength from './snippets/rule-length.sample.html' with { loader: 'text' };
import snippetRuleLengthTs from './snippets/rule-length.sample.txt' with { loader: 'text' };
import snippetRuleSpecifiedContent from './snippets/rule-specified-content.sample.html' with { loader: 'text' };
import snippetRuleSpecifiedContentTs from './snippets/rule-specified-content.sample.txt' with { loader: 'text' };
import snippetRuleSelectionCount from './snippets/rule-selection-count.sample.html' with { loader: 'text' };
import snippetRuleSelectionCountTs from './snippets/rule-selection-count.sample.txt' with { loader: 'text' };

@Component({
  selector: 'doc-form-validation',
  templateUrl: './form-validation.page.html',
  standalone: false
})
export class FormValidationPage {
  snippetSpecifyingRules = snippetSpecifyingRules;
  snippetSpecifyingRulesTs = snippetSpecifyingRulesTs;
  snippetLonghand = snippetLonghand;
  snippetLonghandTs = snippetLonghandTs;
  snippetParameters = snippetParameters;
  snippetParametersTs = snippetParametersTs;
  snippetPrompts = snippetPrompts;
  snippetPromptsTs = snippetPromptsTs;
  snippetMatchingFields = snippetMatchingFields;
  snippetMatchingFieldsTs = snippetMatchingFieldsTs;
  snippetInline = snippetInline;
  snippetInlineTs = snippetInlineTs;
  snippetDependent = snippetDependent;
  snippetDependentTs = snippetDependentTs;
  snippetOptional = snippetOptional;
  snippetOptionalTs = snippetOptionalTs;
  snippetProgrammatic = snippetProgrammatic;
  snippetProgrammaticTs = snippetProgrammaticTs;
  snippetReactive = snippetReactive;
  snippetReactiveTs = snippetReactiveTs;
  snippetRuleEmpty = snippetRuleEmpty;
  snippetRuleEmptyTs = snippetRuleEmptyTs;
  snippetRuleContentType = snippetRuleContentType;
  snippetRuleContentTypeTs = snippetRuleContentTypeTs;
  snippetRulePayment = snippetRulePayment;
  snippetRulePaymentTs = snippetRulePaymentTs;
  snippetRuleMatching = snippetRuleMatching;
  snippetRuleMatchingTs = snippetRuleMatchingTs;
  snippetRuleLength = snippetRuleLength;
  snippetRuleLengthTs = snippetRuleLengthTs;
  snippetRuleSpecifiedContent = snippetRuleSpecifiedContent;
  snippetRuleSpecifiedContentTs = snippetRuleSpecifiedContentTs;
  snippetRuleSelectionCount = snippetRuleSelectionCount;
  snippetRuleSelectionCountTs = snippetRuleSelectionCountTs;

  constructor(title: Title) {
    title.setTitle('Form Validation | Ngx Semantic');
  }
}
