import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'doc-form-validation-specifying-rules-example',
  templateUrl: './snippets/specifying-rules.sample.html',
  standalone: false
})
export class FormValidationSpecifyingRulesExampleComponent {
  state: 'success' | 'error' | null = null;
  fields = {
    name: 'empty',
    gender: 'empty',
    username: 'empty',
    password: ['minLength[6]', 'empty'],
    skills: ['minCount[2]', 'empty'],
    terms: 'checked'
  };
}

@Component({
  selector: 'doc-form-validation-longhand-example',
  templateUrl: './snippets/longhand.sample.html',
  standalone: false
})
export class FormValidationLonghandExampleComponent {
  state: 'success' | 'error' | null = null;
  fields = {
    name: {
      identifier: 'name',
      rules: [{ type: 'empty', prompt: 'Please enter your name' }]
    },
    username: {
      identifier: 'username',
      rules: [{ type: 'empty', prompt: 'Please enter a username' }]
    },
    password: {
      identifier: 'password',
      rules: [
        { type: 'empty', prompt: 'Please enter a password' },
        { type: 'minLength[6]', prompt: 'Your password must be at least {ruleValue} characters' }
      ]
    },
    terms: {
      identifier: 'terms',
      rules: [{ type: 'checked', prompt: 'You must agree to the terms and conditions' }]
    }
  };
}

@Component({
  selector: 'doc-form-validation-parameters-example',
  templateUrl: './snippets/parameters.sample.html',
  standalone: false
})
export class FormValidationParametersExampleComponent {
  state: 'success' | 'error' | null = null;
  fields = {
    color: {
      identifier: 'color',
      rules: [{
        type: 'regExp',
        value: /rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)/i,
        prompt: 'Please enter a colour like rgb(255, 255, 255)'
      }]
    }
  };
}

@Component({
  selector: 'doc-form-validation-prompts-example',
  templateUrl: './snippets/prompts.sample.html',
  standalone: false
})
export class FormValidationPromptsExampleComponent {
  state: 'success' | 'error' | null = null;
  fields = {
    field1: {
      rules: [{ type: 'empty' }]
    },
    field2: {
      rules: [{
        type: 'exactly[dog]',
        prompt: '{name} is set to "{value}" that is totally wrong. It should be {ruleValue}'
      }]
    },
    field3: {
      rules: [{
        type: 'exactly[cat]',
        prompt: (value: unknown) => value === 'dog' ? 'I told you to put cat, not dog!' : 'That is not cat'
      }]
    }
  };
}

@Component({
  selector: 'doc-form-validation-matching-fields-example',
  templateUrl: './snippets/matching-fields.sample.html',
  standalone: false
})
export class FormValidationMatchingFieldsExampleComponent {
  state: 'success' | 'error' | null = null;
  fields = {
    // fields are matched by id, then name, then data-validate
    name: {
      identifier: 'special-name',
      rules: [{ type: 'empty' }]
    },
    serverName: 'empty'
  };
}

@Component({
  selector: 'doc-form-validation-inline-example',
  templateUrl: './snippets/inline.sample.html',
  standalone: false
})
export class FormValidationInlineExampleComponent {
  state: 'success' | 'error' | null = null;
  fields = {
    'first-name': 'empty',
    'last-name': 'empty',
    username: 'empty',
    password: ['minLength[6]', 'empty'],
    terms: 'checked'
  };
}

@Component({
  selector: 'doc-form-validation-dependent-example',
  templateUrl: './snippets/dependent.sample.html',
  standalone: false
})
export class FormValidationDependentExampleComponent {
  state: 'success' | 'error' | null = null;
  fields = {
    yearsPracticed: {
      identifier: 'yearsPracticed',
      depends: 'isDoctor',
      rules: [{ type: 'empty', prompt: 'Please enter the number of years you have been a doctor' }]
    }
  };
}

@Component({
  selector: 'doc-form-validation-optional-example',
  templateUrl: './snippets/optional.sample.html',
  standalone: false
})
export class FormValidationOptionalExampleComponent {
  state: 'success' | 'error' | null = null;
  fields = {
    email: {
      identifier: 'email',
      rules: [{ type: 'email', prompt: 'Please enter a valid e-mail' }]
    },
    ccEmail: {
      identifier: 'cc-email',
      optional: true,
      rules: [{ type: 'email', prompt: 'Please enter a valid second e-mail' }]
    }
  };
}

@Component({
  selector: 'doc-form-validation-programmatic-example',
  templateUrl: './snippets/programmatic.sample.html',
  standalone: false
})
export class FormValidationProgrammaticExampleComponent {
  state: 'success' | 'error' | null = null;
  output: unknown = null;
  fields = {
    name: 'empty',
    gender: 'empty',
    username: 'empty',
    terms: 'checked'
  };
  sample = {
    name: 'Jack',
    gender: 'male',
    username: 'jlukic',
    colors: ['red', 'grey'],
    terms: true
  };
}

@Component({
  selector: 'doc-form-validation-reactive-example',
  templateUrl: './snippets/reactive.sample.html',
  standalone: false
})
export class FormValidationReactiveExampleComponent {
  submitted: unknown = null;
  profile = new FormGroup({
    email: new FormControl(''),
    age: new FormControl('')
  });
  fields = {
    email: ['empty', 'email'],
    age: 'integer[18..120]'
  };
}

@Component({
  selector: 'doc-form-validation-rule-empty-example',
  templateUrl: './snippets/rule-empty.sample.html',
  standalone: false
})
export class FormValidationRuleEmptyExampleComponent {
  state: 'success' | 'error' | null = null;
  fields = {
    empty: { rules: [{ type: 'empty', prompt: 'Please enter a value' }] },
    dropdown: { rules: [{ type: 'empty', prompt: 'Please select a dropdown value' }] },
    checkbox: { rules: [{ type: 'checked', prompt: 'Please check the checkbox' }] }
  };
}

@Component({
  selector: 'doc-form-validation-rule-content-type-example',
  templateUrl: './snippets/rule-content-type.sample.html',
  standalone: false
})
export class FormValidationRuleContentTypeExampleComponent {
  state: 'success' | 'error' | null = null;
  fields = {
    integer: { rules: [{ type: 'integer[1..100]', prompt: 'Please enter an integer value' }] },
    decimal: { rules: [{ type: 'decimal', prompt: 'Please enter a valid decimal' }] },
    number: { rules: [{ type: 'number', prompt: 'Please enter a valid number' }] },
    email: { rules: [{ type: 'email', prompt: 'Please enter a valid e-mail' }] },
    url: { rules: [{ type: 'url', prompt: 'Please enter a url' }] },
    regex: { rules: [{ type: 'regExp[/^[a-z0-9_-]{4,16}$/]', prompt: 'Please enter a 4-16 letter username' }] }
  };
}

@Component({
  selector: 'doc-form-validation-rule-payment-example',
  templateUrl: './snippets/rule-payment.sample.html',
  standalone: false
})
export class FormValidationRulePaymentExampleComponent {
  state: 'success' | 'error' | null = null;
  fields = {
    card: { rules: [{ type: 'creditCard', prompt: 'Please enter a valid credit card' }] },
    exactCard: {
      identifier: 'exact-card',
      rules: [{ type: 'creditCard[visa,amex]', prompt: 'Please enter a visa or amex card' }]
    }
  };
}

@Component({
  selector: 'doc-form-validation-rule-matching-example',
  templateUrl: './snippets/rule-matching.sample.html',
  standalone: false
})
export class FormValidationRuleMatchingExampleComponent {
  state: 'success' | 'error' | null = null;
  fields = {
    match: {
      identifier: 'match2',
      rules: [{ type: 'match[match1]', prompt: 'Please put the same value in both fields' }]
    },
    different: {
      identifier: 'different2',
      rules: [{ type: 'different[different1]', prompt: 'Please put different values for each field' }]
    }
  };
}

@Component({
  selector: 'doc-form-validation-rule-length-example',
  templateUrl: './snippets/rule-length.sample.html',
  standalone: false
})
export class FormValidationRuleLengthExampleComponent {
  state: 'success' | 'error' | null = null;
  fields = {
    minLength: { rules: [{ type: 'minLength[10]', prompt: 'Please enter at least 10 characters' }] },
    exactLength: { rules: [{ type: 'exactLength[6]', prompt: 'Please enter exactly 6 characters' }] },
    maxLength: { rules: [{ type: 'maxLength[10]', prompt: 'Please enter at most 10 characters' }] }
  };
}

@Component({
  selector: 'doc-form-validation-rule-specified-content-example',
  templateUrl: './snippets/rule-specified-content.sample.html',
  standalone: false
})
export class FormValidationRuleSpecifiedContentExampleComponent {
  state: 'success' | 'error' | null = null;
  fields = {
    is: { rules: [{ type: 'is[dog]', prompt: 'Please enter exactly "dog"' }] },
    isExactly: { rules: [{ type: 'isExactly[dog]', prompt: 'Please enter exactly "dog"' }] },
    not: { rules: [{ type: 'not[dog]', prompt: 'Please enter a value, but not "dog"' }] },
    notExactly: { rules: [{ type: 'notExactly[dog]', prompt: 'Please enter a value, but not exactly "dog"' }] },
    contains: { rules: [{ type: 'contains[dog]', prompt: 'Please enter a value containing "dog"' }] },
    containsExactly: { rules: [{ type: 'containsExactly[dog]', prompt: 'Please enter a value containing exactly "dog"' }] },
    doesntContain: { rules: [{ type: 'doesntContain[dog]', prompt: 'Please enter a value not containing "dog"' }] },
    doesntContainExactly: { rules: [{ type: 'doesntContainExactly[dog]', prompt: 'Please enter a value not containing exactly "dog"' }] }
  };
}

@Component({
  selector: 'doc-form-validation-rule-selection-count-example',
  templateUrl: './snippets/rule-selection-count.sample.html',
  standalone: false
})
export class FormValidationRuleSelectionCountExampleComponent {
  state: 'success' | 'error' | null = null;
  fields = {
    minCount: { rules: [{ type: 'minCount[2]', prompt: 'Please select at least 2 values' }] },
    maxCount: { rules: [{ type: 'maxCount[2]', prompt: 'Please select a max of 2 values' }] },
    exactCount: { rules: [{ type: 'exactCount[2]', prompt: 'Please select 2 values' }] }
  };
}

export const FORM_VALIDATION_EXAMPLES = [
  FormValidationSpecifyingRulesExampleComponent,
  FormValidationLonghandExampleComponent,
  FormValidationParametersExampleComponent,
  FormValidationPromptsExampleComponent,
  FormValidationMatchingFieldsExampleComponent,
  FormValidationInlineExampleComponent,
  FormValidationDependentExampleComponent,
  FormValidationOptionalExampleComponent,
  FormValidationProgrammaticExampleComponent,
  FormValidationReactiveExampleComponent,
  FormValidationRuleEmptyExampleComponent,
  FormValidationRuleContentTypeExampleComponent,
  FormValidationRulePaymentExampleComponent,
  FormValidationRuleMatchingExampleComponent,
  FormValidationRuleLengthExampleComponent,
  FormValidationRuleSpecifiedContentExampleComponent,
  FormValidationRuleSelectionCountExampleComponent,
];
